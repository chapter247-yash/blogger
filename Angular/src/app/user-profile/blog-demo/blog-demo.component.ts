import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { BlogAddService } from '../../shared/blog-add.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-blog-demo',
  templateUrl: './blog-demo.component.html',
  styleUrls: ['./blog-demo.component.css']
})
export class BlogDemoComponent implements OnInit {

constructor(private service: BlogAddService ,private userService: UserService,private router: Router ) { }

cards = [  
  { title: 'Card 1', cols: 2, rows: 1 },  
  { title: 'Card 2', cols: 1, rows: 1 },  
  { title: 'Card 3', cols: 1, rows: 2 },  
  { title: 'Card 4', cols: 1, rows: 1 }  
];  

  ngOnInit() {
  }

}
