import React, { Component } from 'react';

class Footer extends Component {
    state = { 
        company: "DwanTech"
     }
    render() { 
        return ( 
            <div className="footer">
                &copy; {this.year()} {this.state.company}
            </div>
         );
    }
    year() {
        let date = new Date()
        return date.getFullYear()
    }
}

export default Footer;