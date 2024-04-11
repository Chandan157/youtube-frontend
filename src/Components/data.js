export const API_KEY='AIzaSyD3BSvLL10z5il_QMOtg6_UzmI1QHz_owA';

export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M"
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}