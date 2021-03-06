/**
 * Created by Araja Jyothi Babu on 30-May-16.
 */
var options = {
    data : {
        days : {
            "2016-05-22": [200, 10, 20, 30, 40, 10, 20, 20, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-23": [300, 200, 150, 50, 20, 20, 90, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-24": [200, 110, 150, 50, 10, 20, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-25": [100, 10, 10, 50, 20, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-26": [300, 200, 150, 50, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-27": [200, 110, 40, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-28": [100, 50, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-29": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-05-30": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1, 1],
            "2016-05-31": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1, 1],
            "2016-06-01": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1, 1],
            "2016-06-02": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1, 1],
            "2016-06-03": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1, 1],
            "2016-06-04": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1, 1],
            "2016-06-05": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1, 1],
            "2016-06-06": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1 , 1],
            "2016-06-07": [200, 1, 1, 1, 1, 1, 1, 1, 1 ,1],
            "2016-06-08": [200, 1, 1, 1, 1, 1, 1, 1, 1],
            "2016-06-09": [200, 1, 1, 1, 1, 1, 1, 1],
            "2016-06-10": [200, 1, 1, 1, 1, 1, 1],
            "2016-06-11": [200, 1, 1, 1, 1, 1],
            "2016-06-12": [200, 1, 1, 1, 1],
            "2016-06-13": [200, 1, 1, 1],
            "2016-06-14": [200, 1, 1],
            "2016-06-15": [200, 1],
            "2016-06-16": [200]
        }
    },
    inputDateFormat : "YYYY-MM-DD",
    dateDisplayFormat : "YYYY-MM-DD",
    title : "",
    cellClickEvent : function(date, day){
        alert("date=" + date + "&day="+ day);
    },
    enableInactive: true,
    dayClickEvent : function(day, startDate, endDate){
        alert(day + "start" + startDate + "end" + endDate);
    },
    retentionDays : 25,
    enableDateRange:false,
    showAbsolute : false,
    toggleValues : true
};