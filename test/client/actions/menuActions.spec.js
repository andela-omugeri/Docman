import request from 'superagent';
import mocker from 'superagent-mocker';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { expect } from 'chai';

import * as menuActions from '../../../app/actions/menuActions.js';

const mock = mocker(request);
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('menu actions', () => {
  beforeEach(() => {
    mock.clearRoutes();
  });

  it('simulates opening the user menu', () => {
    const users = true;
    const expectedAction = {
      type: 'OPEN_USERS',
      users,
    };
    expect(menuActions.openUsers(users)).to.eql(expectedAction);
  });

  it('simulates opening the documents menu', () => {
    const documents = true;
    const expectedAction = {
      type: 'OPEN_DOCUMENTS',
      documents,
    };
    expect(menuActions.openDocuments(documents)).to.eql(expectedAction);
  });
  it('simulates opening user documents menu', () => {
    const userDocOpen = true;
    const expectedAction = {
      type: 'OPEN_USER_DOC',
      userDocOpen,
    };
    expect(menuActions.openUserDoc(userDocOpen)).to.eql(expectedAction);
  });
  it('simulates opening the roles menu', () => {
    const roles = true;
    const expectedAction = {
      type: 'OPEN_ROLES',
      roles,
    };
    expect(menuActions.openRoles(roles)).to.eql(expectedAction);
  });
  it('simulates opening the results dialog', () => {
    const resultsMenu = true;
    const expectedAction = {
      type: 'OPEN_RESULTS',
      resultsMenu,
    };
    expect(menuActions.openResults(resultsMenu)).to.eql(expectedAction);
  });
});
