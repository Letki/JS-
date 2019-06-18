// 冒泡排序 升序
function bubbleSort(arr){
    for(let i=1;i<arr.length;i++){
        let change=false; //是否交换的标志,如果一次循环中没有产生交换,证明有序
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=temp;
                change=true;
            }
        }
        if(!change)
            break;
    }
}

// 快排
function quickSort(arr,l,r){
    // 当遇到l>=r时,证明这时候只对一个元素排序,一个元素已经是有序的,直接return
    if(l>=r){
        return;
    }
    let i=l,x=arr[l];
    let j=r;
    while(i<j){
        while(i<j&&arr[j]>x){
            //找到右边比x小的元素下标
            j--;
        }
        // 交换
        if(i<j)
            arr[i++]=arr[j];
        while(i<j&&arr[i]<x){
            //找到左边比x大的元素下标
            i++;
        }
        if(i<j)
            arr[j--]=arr[i];
    }
    arr[i]=x;
    // 此时 i 为中间节点,左边都是小的,右边都是大的
    quickSort(arr, l, i-1);
    quickSort(arr, i+1, r);
}


// 二路归并排序, 两个数组需要是有序的
function mergeSort(arr,l,r){
    if(l>=r)
        return;
    let mid=parseInt((l+r)/2);
    // mid的左边递归
    mergeSort(arr,l,mid);
    // mid的右边递归
    mergeSort(arr,mid+1,r);
    //合并
    merge(arr,l,mid,mid+1,r);
}
function merge(arr,_ls,_le,_rs,_re){
    let result=[];
    let ls=_ls,le=_le,rs=_rs,re=_re;
    while(ls<=le && rs<=re){
        if(arr[ls]<=arr[rs]){
            result.push(arr[ls++]);
        } else{
            result.push(arr[rs++]);
        }
    }
    while(ls<=le){
        result.push(arr[ls++]);
    }
    while(rs<=re){
        result.push(arr[rs++]);
    }
    let z=0;
    while(_ls<=_re){
        arr[_ls]=result[z++];
        _ls++;
    }
}

let arr1=[2,1,3,4,5];
mergeSort(arr1,0,arr1.length-1);
console.log(arr1);