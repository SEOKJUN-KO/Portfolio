import { Component } from 'react';

class Create_Content extends Component{
    render(){
      console.log('CreateContent render');
      return (
        <article>
          <h2>Create</h2>
          <form action="create_process" method="post"
            onSubmit={function(e){
              e.preventDefault();
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder="title"></input></p>
            <p><textarea name="desc" placeholder="descrition"></textarea></p>
            <p>
              <input type="submit"></input>
            </p>
          </form>
        </article>
      );
    }
  }

export default Create_Content;