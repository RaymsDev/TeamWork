import * as React from 'react';
import { Redirect } from 'react-router';
import { RouteList } from '../../../../config/RouteList';
import PageTemplateContainer from '../../../containers/PageTemplateContainer';
import { ILoginPageProps } from './ILoginPageProps';
export class LoginPage extends React.Component<ILoginPageProps> {
  constructor(props: ILoginPageProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { login, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to={{ pathname: RouteList.home }} />;
    } else {
      login();
      return (
        <PageTemplateContainer>
          <div>Login...</div>
        </PageTemplateContainer>
      );
    }
  }
}
