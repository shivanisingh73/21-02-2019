var temperature = [10,20,30,40,50];
//insert will add new temperatures
  function insert(temp){
    temperature.push(temp);
    console.log("after inserting new temperature=",temperature);
  }insert(10)
//get_max will show maximum temperature  
   function get_max()
   {
       var max,swap;
       max=temperature[0];
       for(let i=1; i<temperature.length; i++)
       {
           if(max < temperature[i])
           {
               swap = max;
               max = temperature[i];
               temperature[i] = swap;
           }
       }
       console.log("returns max temperature=",max);
   }get_max()
//get_min will show minimum temperature
   function get_min()
   {
       var min,swap;
       min=temperature[0];
       for(let i=1; i<temperature.length; i++)
       {
           if(min > temperature[i])
           {
               swap = min;
               min = temperature[i];
               temperature[i] = swap;
           }
       }
       console.log("returns min temperature=",min);
   }get_min()
//get_mean will show mean of all temperatures
   function get_mean(){
       var sum=0;
       var n=0;
       var mean;
       for(let i=0; i<temperature.length; i++)
       {
            sum=sum+temperature[i];
       }
       n=temperature.length;
       mean=sum/n;
       console.log("returns mean of all temperatures=",mean);
   }get_mean()
//get_mode will show mode of all temperatures
   function get_mode()
   {
       var maxCount=0;
       var maxValue=0;
       var count=0;
       for(let i=0; i<temperature.length; i++)
       {
           for(let j=i+1; j<temperature.length; j++)
           {
               if(temperature[i] == temperature[j])
               {
                   count++;
               }
               if(count > maxCount)
               {
                   maxCount = count;
                   maxValue = temperature[i];
               }
           }
       }
       console.log("returns mode=",maxValue);
   }get_mode()
