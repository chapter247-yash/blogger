import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Blog } from './blog.model';

@Injectable({
  providedIn: 'root'
})
export class BlogAddService {
  selectedBlog: Blog = {
    _id: '',
    title: '',
    shortDescription : '',
    category: '',
    fullDescription: '',
    editorValue:'',
    __v:'',
  };
  
  form: FormGroup = new FormGroup({
    _id: new FormControl(''),
    title: new FormControl(''),
    shortDescription : new FormControl(''),
    category: new FormControl(''),
    fullDescription: new FormControl(''),
    editorValue: new FormControl(''),
    __v: new FormControl(''),
  });
    
initializeFormGroup() {
    this.form.setValue({
      _id: null,
      title: '',
      shortDescription: '',
      category: '',
      fullDescription: '',
      editorValue:'',
      __v: '0',
  });
}


  blogs: Blog[];
  readonly baseURL = 'http://localhost:3000/blog';

  constructor(private http: HttpClient) { }

  postBlog(blog: Blog) {
    return this.http.post(this.baseURL, blog);
  }

  getBlog() {
    return this.http.get(this.baseURL);
  }

  editBlog(blog: Blog) {
    return this.http.put(this.baseURL + `/${blog._id}`,blog);
  }

  deleteBlog(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }


}
