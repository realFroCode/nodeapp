const nums = [1,1,1,3,3,4,3,2,4,2]




// var containsDuplicate = function() {
   
    
//     if(nums.length > 1){

//     for(let k=1,i=0;k!=nums.length; k++,i++){
        
//         nums.sort()
        
//         //console.log(nums);
//         if (nums[i] != nums[k]) {

            
//             console.log(nums[i],nums[k]);
//             console.log(false);
//             return false
            
//         }else{
//             console.log(nums[i],nums[k]);
//         console.log(true);
//         return true
//     }
        
//     }}else{
//         console.log(false);
//     }
    

    
// };



function find (i){
    
    for (let i = 1; i <= nums.length; i++) {
        nums.sort()
        if(nums[0] != nums[1]){
            nums.splice(0,1)
            console.log(nums);
            return console.log(false);

        }else{
              return console.log(true);
        }
        
    }

}





find()