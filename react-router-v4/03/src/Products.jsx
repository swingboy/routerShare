import React from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product';

const Products = ({ match }) => {

	const productsData = [
		{
			id: 1,
			name: 'product 1 ',
			description: '描述。1111',
			status: '有'
		}, {
			id: 2,
			name: 'product 2 ',
			description: '描述。22222',
			status: '有'
		}, {
			id: 3,
			name: 'product 3',
			description: '描述。。。。333',
			status: '有'
		}, {
			id: 4,
			name: 'product 4',
			description: '描述。。。。',
			status: '无 '
		},
	];
	var linkList = productsData.map((product) => {
		return (
			<li key={product.id}>
				<Link to={`${match.url}/${product.id}`}>
					{product.name}
				</Link>
			</li>
		)

	})

	return (
		<div>
			<div style={{ display: 'block', justifyContent: "space-between" }}>
				<div style={{ float: 'left', padding: '10px', width: '30%', background: '#f0f0f0', marginLeft: 'auto' }}>
					<h3>产品</h3>
					<ul style={{ listStyleType: 'none', padding: 0, fontSize: '15px' }}>
					 {linkList}
					</ul>
				</div>
			</div>

			<Route path={`${match.url}/:productId`}
				render={(props) => <Product data={productsData} {...props} testP= {props}/>} />
			
			<Route exact path={match.url}
				render={() => (
					<div style={{ textAlign: 'center' }}> 请选择</div>
				)}/>

		</div>

	)
}

export default Products;