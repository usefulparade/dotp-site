
class ReactContent extends React.Component {
	constructor(props) {
		super(props);
		let i = 0;
		var up = true;
	}

	numberClicker(e){
		e.preventDefault();
			if (this.up){
				this.i++;
			} else {
				this.i--;
			}

			if (this.i > 100 || this.i < 0){
				!this.up;
			}
		}

  render() {

    return (
      <div>
        Hello {this.i}
      </div>
    );
  }
}

// ReactDOM.render(
//   <ReactContent />,
//   document.getElementById('reactContent')
// );