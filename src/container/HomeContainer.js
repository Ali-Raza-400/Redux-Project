import Home from '../component/Home'
import { connect } from 'react-redux'
import { addToCart } from '../Services/Actions/action'

const mapStateToProps=state=>({

})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home