import React, { Component } from 'react';
import { Button } from 'antd';
import Card from './Card';
// import { throws } from 'assert';
const data = [{
    "name": "Beret Thrower",
    "url": "https://images.unsplash.com/photo-1542841366-ddfe55c504a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=315b994a3dd008a283d576cb34cc4f79&auto=format&fit=crop&w=668&q=80",
    "location": "Nikol’sk",
    "bio": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
}, {
    "name": "Melisandra Greatbatch",
    "url": "https://images.unsplash.com/photo-1542838686-b08706f6f2d1?ixlib=rb-0.3.5&s=34973521d142d68c7c10b8c4a5c0ec4e&auto=format&fit=crop&w=668&q=80",
    "location": "Ganding",
    "bio": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat."
}, {
    "name": "Brodie Bretelle",
    "url": "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9305a37dfc018487bca76a6f59944ad4&auto=format&fit=crop&w=1650&q=80",
    "location": "Tambura",
    "bio": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
}, {
    "name": "Prince Bednell",
    "url": "https://images.unsplash.com/photo-1523419409543-a5e549c1faa8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fa485f770bd733e2f8ab5a4a2ca50a39&auto=format&fit=crop&w=686&q=80",
    "location": "Huangmei",
    "bio": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris."
}, {
    "name": "Gareth Fewell",
    "url": "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=439ae9d2f9629f265b954750ce130f44&auto=format&fit=crop&w=668&q=80",
    "location": "Impendle",
    "bio": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
}];
class PersonalDetails extends Component {
    saveAndContinue = (e, name) => {
        e.preventDefault()
        this.props.handleChange(name);
        this.props.nextStep();
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values } = this.props
        return (
            <div className="grid">
                <h1 className="ui centered">Pick a guide</h1>

                {data.map(guide => <Card guide={guide} save={this.saveAndContinue} />)}
                <Button onClick={this.back}>Back</Button>
                {/* <Button onClick={}>Save And Continue </Button> */}
            </div>
        )
    }
}

export default PersonalDetails;