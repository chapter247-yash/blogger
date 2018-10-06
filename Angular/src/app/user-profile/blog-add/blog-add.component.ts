import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { BlogAddService } from '../../shared/blog-add.service';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormControl } from '@angular/forms';
import {MatDialogModule, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {UserProfileComponent } from '../user-profile.component'

declare var M: any;
declare const CKEDITOR: any;


@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css'],
  providers: [UserService, BlogAddService]
})
export class BlogAddComponent implements OnInit {

constructor(private service: BlogAddService ,
  private userService: UserService,
  private router: Router,
  public dialogRef: MatDialogRef<BlogAddComponent>)  { }
  

ngOnInit() {}

ngAfterViewInit() {
  CKEDITOR.replace( 'editor1' );
  }

onSubmit(form) {
  const fullDescription = CKEDITOR.instances.editor1.getData(); 
  form.fullDescription = fullDescription;
  console.log(form)
  console.log(form._id)
  console.log(form.title)
  if (form._id == "")
  this.service.postBlog(form).subscribe((res) => {
    console.log(res);
    M.toast({ html: 'Saved successfully', classes: 'rounded' });
    this.onClose()
      });
    }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }

}


