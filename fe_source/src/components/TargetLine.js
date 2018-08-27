import React, { Component } from 'react';
import {Timeline, Icon, Tag} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const startDay = moment('2018-8-22', 'YYYY-MM-DD');
const startWeight = 93.5;
const pastDays = 5;
const futureDays = 15;
const daysPerPointKilo = 1.5;

function computeWeight(day) {
    const diff = day.diff(startDay, 'day');
    const shouldAddWeight =  Math.floor(diff / daysPerPointKilo);
    return startWeight + shouldAddWeight * 0.1;
}

function TargetItem({date}) {
    return (
        <div style={{overflow: 'hidden'}}>
            <span style={{float: 'left', marginLeft: 10}}>{date.format("MMM DD - YYYY")}</span>
            <Tag color="orange">
                {computeWeight(date).toFixed(1)}kg
            </Tag>
        </div>
    )
}

class TargetLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    render() {
        return (
            <Timeline>
                {new Array(pastDays).fill('pastDays').map((value, index) => {
                    const tody = moment();
                    const date = tody.subtract(pastDays - index, 'day');

                    return (
                        <Timeline.Item key={`${value}-${index}`} color="green">
                            <TargetItem date={date} />
                        </Timeline.Item>
                    )
                })}
                <Timeline.Item dot={<Icon type="smile" style={{ fontSize: '20px' }} />} color="red">
                    <TargetItem date={moment()} />
                </Timeline.Item>
                {new Array(futureDays).fill('futureDays').map((value, index) => {
                    const tody = moment();
                    const date = tody.add(index + 1, 'day');

                    return (
                        <Timeline.Item key={`${value}-${index}`}>
                            <TargetItem date={date} />
                        </Timeline.Item>
                    )
                })}
                <Timeline.Item dot={<Icon type="skin" style={{ fontSize: '20px' }} />} color="green">
                    <TargetItem date={moment('2019-04-01', 'YYYY-MM-DD')} />
                </Timeline.Item>
            </Timeline>
        );
    }
}

export default TargetLine;