import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BlogAddService } from '../../shared/blog-add.service';
import { Router } from "@angular/router";
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { Blog } from '../../shared/blog.model';
import { MatDialog, MatDialogConfig } from "@angular/material";
import * as _ from 'lodash';
import { FormGroup, FormControl, Validators} from "@angular/forms";

import { BlogAddComponent } from '../blog-add/blog-add.component';
import { flattenStyles } from '@angular/platform-browser/src/dom/dom_renderer';

declare var M: any;

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  form: FormGroup
  blogs: Blog[];
  searchKey: string;
  constructor(private service: BlogAddService, private router: Router,
    private dialog: MatDialog,) { }

  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['title','shortDescription','category','fullDescription','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
  }

 getBlog() {
    this.service.getBlog().subscribe((res) => {
      this.service.blogs = res as Blog[];
      console.log(this.service.blogs)
      this.listData= new MatTableDataSource(this.service.blogs);
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
    });
  }

  deleteBlog(_id: string, form: NgForm){
    console.log(_id);
    this.service.deleteBlog(_id).subscribe((res) => {
      this.getBlog();
      M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      console.log('Deleted Successfully....')
    });
  }

  editBlog(blog: Blog, form: NgForm) {
    console.log(blog)
    this.onCreate(blog);
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

onCreate(blog) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "60%";
  this.dialog.open(BlogAddComponent,dialogConfig);
  }





}
