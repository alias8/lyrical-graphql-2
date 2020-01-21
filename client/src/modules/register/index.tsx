import * as React from "react";
import {
    RegisterComponent, RegisterComponentProps,
    RegisterMutationFn,
} from "../../generated/graphql";
import {SyntheticEvent} from "react";
import { RouteComponentProps } from "react-router";

interface IState {
    email: string;
    password: string;
}

type IProps = RegisterComponentProps & RouteComponentProps

export class Register extends React.PureComponent<IProps, IState> {
    public state = {
        email: "",
        password: ""
    };

    render() {
        const { email, password } = this.state;
        return (
            <RegisterComponent>
                {mutate => (
                    <>
                        <h3>Register form</h3>
                        <form
                            onSubmit={event => this.onSubmit(event, mutate)}
                        >
                            <label>Email:</label>
                            <input
                                onChange={event =>
                                    this.setState({ email: event.target.value })
                                }
                                value={email}
                            />
                            <label>Password:</label>
                            <input
                                onChange={event =>
                                    this.setState({ password: event.target.value })
                                }
                                value={password}
                            />
                            <input type="submit" value="Submit" />
                        </form>
                    </>
                )}
            </RegisterComponent>
        );
    }

    private onSubmit = (
        event: SyntheticEvent<HTMLFormElement>,
        mutate: RegisterMutationFn,
    ) => {
        event.preventDefault();
        const { email, password } = this.state;
        const { history } = this.props;
        mutate!({
            variables: {
                email,
                password
            }
        })
            .then(() => {
                history.push("/");
            })
            .catch((error) => {
                console.log(error)
            })
    };
}
