import * as React from "react";
import {
    RegisterComponent,
    RegisterMutationFn,
} from "../../generated/graphql";
import {SyntheticEvent} from "react";

interface IState {
    email: string;
    password: string;
}

export class Register extends React.PureComponent<{}, IState> {
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
        mutate!({
            variables: {
                email,
                password
            }
        })
            .then((res) => {
                const a = 2 ;
            })
            .catch((error) => {
                const b = 2;
            })
    };
}
