import React from 'react';

export class Section extends React.Component {
  createListItem(item) {
    return (
      <li>
        <h4>{item.title}</h4>
        <small>{item.pay}</small>
        <p>{item.description}</p>
        <small>{item.interested.length} dinos are interested in this job</small>
      </li>
    )
  }

  render () {
    return <section>
            <h2>Job Listings</h2>
            <ul id="job-listings">
              {this.props.listings.map(this.createListItem)}
            </ul>
           </section>
  }
}
