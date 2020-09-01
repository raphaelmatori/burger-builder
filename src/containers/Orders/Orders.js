import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import Spinner from '../../components/UI/Spinner/Spinner';
class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrder();
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
                return (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                );
            })
        }
        return (
            <div style={{ marginTop: 66 }}>
                {orders}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrder: () => dispatch(actions.fetchOrders())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));