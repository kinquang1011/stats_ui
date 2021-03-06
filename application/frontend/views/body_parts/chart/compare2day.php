<?php
/**
 * Created by IntelliJ IDEA.
 * User: tuonglv
 * Date: 20/04/2016
 * Time: 09:17
 */

$tmp=array();



foreach($data as $key => $value){
    $tmp[$value['type']][] = $value;
}

if($tmp['column'] && $tmp['spline']){
    $data = array_merge($tmp['column'], $tmp['spline']);
}else if($tmp['column']){
    $data = $tmp['column'];
}else{
    $data = $tmp['spline'];
}

?>
<script type="text/javascript">
    $(function () {
        Highcharts.setOptions({
            colors: ['#7CB5EC', '#F56954', '#7CB5EC', '#F56954', '#C3C66C']
        });
        $('#<?php echo $id?>').highcharts({

            chart: {
                /* alignTicks: false, */
                zoomType: 'xy'
            },
            title: {
                text: '<?php echo $title ?>'
            },
            subtitle: {
                text: '<?php echo $subTitle ?>'
            },
            xAxis: [{
                categories: [<?php echo $xAxisCategories; ?>]
            }],
            yAxis: [
                { // Primary yAxis
                    title: {
                        text: '<?php echo $yPrimaryAxisTitle?>',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    min: 0,
                    labels: {
                        // format: '{value} ',
                        formatter: function () {
                            //if (this.value >= 1000000000) {
                            if (this.value >= 1000000000000000000) {
                                this.value = this.value / 1000000000;
                                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Bil";
                            } else if (this.value >= 1000000) {
                                this.value = this.value / 1000000;
                                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Mil";
                            } else {
                                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                            }
                        },
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    }
                },
                { // Second yAxis
                    title: {
                        text: '<?php echo $ySecondaryAxisTitle?>',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    min:0,
                    labels: {
                        // format: '{value} ',
                        formatter: function () {
                            if (this.value >= 1000000000000000000) {
                                this.value = this.value / 1000000000;
                                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Bil";
                            } else if (this.value >= 1000000) {
                                this.value = this.value / 1000000;
                                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " Mil";
                            } else {
                                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                            }
                        },
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    opposite: true
                }

            ],
            tooltip: {
                shared: true
            },
            credits: {
                enabled: false
            },
            series: [
                <?php
                $i=0;
                foreach($data as $key => $value){
                    echo "{";
                    echo "color: Highcharts.getOptions().colors[".$i."],";
                    echo "name:'" .  $value['name'] . "',";
                    echo "type:'" .  $value['type'] . "',";
                    echo "yAxis:" .  $value['yAxis'] . ",";
                    echo "data: [" . $value['data'] . "],";
                    echo "lineWidth: 2";
                    echo "},";
                    $i++;
                }
                ?>
            ]
        });
    });
</script>
