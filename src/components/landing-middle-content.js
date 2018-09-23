import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default () =>{
  return(
    <div className="row container-fluid landing-middle-content">
      <div className="col-sm-7 col-12">
      <h3 className="txt-blue">This is a very long description of our services</h3>
      <p>
        Lorem Ipsum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris feugiat ornare gravida. Maecenas sed ex odio. In ornare sed libero sit amet ornare. Nam feugiat mi iaculis nisl euismod, ac vehicula lectus gravida. Nulla est ex, ullamcorper eu sem id, mollis sollicitudin nulla. Praesent interdum arcu ut malesuada condimentum. Nam quam elit, fringilla ac massa et, vestibulum condimentum elit. Cras ac pretium tellus.
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
      </p>
      <img
        src="https://images.unsplash.com/photo-1501772529219-ed0014f5032c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9dab1f9068d2b059a79cfdc65b2731dd&auto=format&fit=crop&w=500&q=60"
        className="img-fluid rounded" alt="Image of the bank trends" aria-label="Bank trends"
      />
      </div>

      <div className="col-sm-5 col-12">
        <h2>A big announcment</h2>
        <div>
          <img
            src="https://images.unsplash.com/photo-1518515279220-04e9fe2f2af8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=94b558b31f22fc173f21984c111b94f4&auto=format&fit=crop&w=1399&q=80"
            className="img-fluid rounded" alt="Responsive image" aria-label="A beautiful image"
          />
          <hr />
          <h4 className='txt-green'>Some title</h4>
          <img
            src="https://images.unsplash.com/photo-1518774727995-37bccfdfde0e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4217a62c567ec4db3cbcc257dcff8afd&auto=format&fit=crop&w=500&q=60"
            className="img-fluid rounded" alt="Another represantation" aria-label="Image a whoman holdin turned on white table computer"
          />
          <p>

            Phasellus sodales sed augue a pellentesque. Donec eleifend condimentum condimentum. Donec pellentesque ultricies aliquam. Nulla magna massa, tristique quis orci eu, ornare hendrerit ligula. Nunc a orci in dolor malesuada sagittis a sit amet orci. Nunc dui nisl, auctor et suscipit feugiat, molestie sed sem. Donec pretium, nisi vel malesuada posuere, mauris magna vehicula lectus, vel posuere ipsum lectus in ante. Mauris ornare sapien sit amet ligula mollis volutpat eget in ipsum. Vivamus ullamcorper vestibulum leo ut sodales. Donec dapibus at sem sed finibus. Donec mollis aliquam justo, vel bibendum justo aliquam ac. Suspendisse nec ex vestibulum, pulvinar libero eget, sodales tellus. Praesent rhoncus tellus in sem convallis bibendum. Aenean tellus lorem, feugiat ut dictum quis, molestie in lacus. Morbi feugiat dolor sed diam tincidunt, in elementum nibh elementum.
          </p>
        </div>
      </div>
    </div>
  )
}
