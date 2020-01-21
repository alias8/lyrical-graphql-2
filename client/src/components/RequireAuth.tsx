import React from "react";
import {GetMeComponent, GetMeComponentProps} from "../generated/graphql";
import {RouteComponentProps} from "react-router";
import {Login} from "../modules/login";

export default <P extends object>(
    WrappedComponent: React.ComponentType<P> | any
) => {
    type IProps = RouteComponentProps;

    class RequireAuth extends React.Component<IProps> {
        public render() {
            const {...props} = this.props;

            // doesn't work...
            return (
                <GetMeComponent>
                    {({ data, loading, error }) => {
                        if(data && data.me && data.me.email) {
                            return <WrappedComponent {...(props as P)} />
                        } else if (loading){
                            return <div>loading!</div>
                        } else if(error) {
                            return <div>error!</div>
                        } else {
                            return null
                        }
                    }}
                </GetMeComponent>
            );
        }
    }

    return RequireAuth;
};


