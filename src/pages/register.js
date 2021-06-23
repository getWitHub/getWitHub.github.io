
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Helmet } from 'react-helmet';


const StyledWaitlist = styled.div`
    padding-top: 25vh;
    align-self: center;
    h1 {
      color: #eeeeee;
    }
    .container--waitlistapi {
      margin: 0 auto; // centers the widget
      background-color: #222222;
    }
    .button--waitlistapi {
      background-color: #000000;
    }
    .statusTextContainer--waitlistapi {
      color: #eeeeee;
    }
    .referralLinkField--text {
      color: #eeeeee;
    }
`;
const Register = props => {

  return (
    <Layout class="waitlist">
        <Helmet>
        <meta name="title" content="WitHub-Highlight the Web" />
        <meta name="twitter:image" content="https://www.getwithub.com/images/twitter-card.png"></meta>
        <meta name="google-site-verification" content="o3HIEwGXZYyzUc78j6msWtj3TnGWNJIFlra-sliw5kk" />
        <script 
          src="https://unpkg.com/waitlistapi/dist/widget.js" 
          id="Waitlist-API-Script" 
          data-config="{
            'name': 'w1', 
            'api_key': '80KO4S', 
            'waitlist_link': 'https://getwithub.com/register',
            'config': {'targetElementId': 'root'}
          }"
        ></script>
      </Helmet>
      <div>
        <StyledWaitlist id='root'></StyledWaitlist>
        </div>
    </Layout>
  );
};
export default Register;