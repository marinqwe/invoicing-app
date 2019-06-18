import styled from 'styled-components';
import NProgress from 'nprogress';
import Router from 'next/router';
import gql from 'graphql-tag';
import { Mutation, Query } from 'react-apollo';
import Link from 'next/link';
import Button from './styles/Button';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const StyledHeader = styled.header`
  border-bottom: 5px solid ${props => props.theme.blue};
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  @media (max-width: 1300px) {
    justify-content: space-around;
  }
`;

const LOCAL_STATE_QUERY = gql`
  query {
    showCreateForm @client
  }
`;

const SHOW_CREATE_FORM_MUTATION = gql`
  mutation {
    toggleForm @client
  }
`;

const LOCAL_STATE_TO_DEFAULT = gql`
  mutation {
    setToDefault @client
  }
`;

const Header = props => (
  <StyledHeader>
    <Mutation mutation={LOCAL_STATE_TO_DEFAULT}>
      {setToDefault => (
        <Link href="/">
          <a onClick={setToDefault}>Invoices</a>
        </Link>
      )}
    </Mutation>
    <Mutation mutation={SHOW_CREATE_FORM_MUTATION}>
      {toggleForm => (
        <Query query={LOCAL_STATE_QUERY}>
          {({ data }) => (
            <Button disabled={props.query.id} onClick={toggleForm}>
              {!data.showCreateForm ? 'CREATE NEW' : 'CANCEL'}
            </Button>
          )}
        </Query>
      )}
    </Mutation>
  </StyledHeader>
);

export default Header;
export { SHOW_CREATE_FORM_MUTATION, LOCAL_STATE_QUERY };
