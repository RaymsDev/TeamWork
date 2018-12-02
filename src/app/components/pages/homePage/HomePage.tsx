import * as React from 'react';
import { PageTemplate } from '../../templates/pageTemplate/PageTemplate';
export class HomePage extends React.Component {
  public render(): JSX.Element {
    const children = <div>Home</div>;
    return (
      <PageTemplate>
        {children}
      </PageTemplate>
    );
  }
}