import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { BlogAddService } from '../../shared/blog-add.service';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

  constructor(private service: BlogAddService ,private userService: UserService,private router: Router) { }

  ngOnInit() {
  }

}
