import React, { Component } from 'react';
import {Timeline, Icon, Tag} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

const startDay = moment('2018-8-5');
const startWeight = 91;

function computeWeight(day) {
    const diff = day.diff(startDay, 'day');
    const shouldAddWeight =  Math.floor(diff / 3);
    return startWeight + shouldAddWeight * 0.1;
}

function TargetItem({date}) {
    return (
        <div style={{overflow: 'hidden'}}>
            <span style={{float: 'left', marginLeft: 10}}>{date.format("MMM DD YY")}</span>
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
        const pastDays = 6;
        const futureDays = 10;

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
            </Timeline>
        );
    }
}

export default TargetLine;