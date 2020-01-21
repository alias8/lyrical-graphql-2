

import * as React from "react";
import {
    LogoutComponent, LogoutComponentProps, LogoutMutationFn,
} from "../../generated/graphql";
import {SyntheticEvent} from "react";
import { RouteComponentProps } from "react-router";

type IProps = LogoutComponentProps & RouteComponentProps

export class Logout extends React.PureComponent<IProps> {
    render() {
        return (
            <LogoutComponent>
                {mutate => (
                    <>
                        <h3>Logout button</h3>
                        <form
                            onSubmit={event => this.onSubmit(event, mutate)}
                        >
                            <input type="submit" value="Logout" />
                        </form>
                    </>
                )}
            </LogoutComponent>
        );
    }

    private onSubmit = (
        event: SyntheticEvent<HTMLFormElement>,
        mutate: LogoutMutationFn,
    ) => {
        event.preventDefault();
        const { history } = this.props;
        mutate({
            variables: {}
        })
            .then(() => {
                history.push("/login");
            })
            .catch((error) => {
                console.log(error)
            })
    };
}
