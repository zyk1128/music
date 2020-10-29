import React, { memo,useEffect} from 'react';
import { shallowEqual,useDispatch,useSelector } from 'react-redux';
import { getRecommendBanner_Action } from './store/createAction';



function RecommendPage() {

  const { recommendBanner } = useSelector(state => ({
    // 第一种写法：
    // recommendBanner:state.get('recommend').get('recommendBanner')
    // 语法糖写法：
    recommendBanner:state.getIn(['recommend','recommendBanner'])

  }),shallowEqual);
  console.log(recommendBanner);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getRecommendBanner_Action())
  },[dispatch])
  return (
    <div>
      <h2>RecommendPage</h2>
    </div>
  )
}



export default memo(RecommendPage);




// function RecommendPage(props) {
//   const { getBannerHandle,recommend } = props;
//   console.log(recommend);
//   useEffect(()=>{
//     getBannerHandle()
//   },[getBannerHandle])
//   return (
//     <div>
//       <h2>RecommendPage</h2>
//     </div>
//   )
// }
// const mapStateToProps = state => ({
//   recommend:state.recommend.recommendBanner
// });

// const mapDispatchToProps = dispatch =>({
//   getBannerHandle : ()=>{ dispatch(getRecommendBanner_Action()) }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(RecommendPage));


