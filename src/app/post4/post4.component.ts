import {Component} from '@angular/core';

@Component({
  selector: 'app-post4',
  template: `
  <div class="post4">
    <h2>Post4 title</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta, non!</p>
  </div>
  `,
  styles: [`
  .post4{
    padding: .3rem;
    border:4px brown;
  }
    h2{
      font-size: 2rem;
    }
  `]
})
export class Post4Component {

}
