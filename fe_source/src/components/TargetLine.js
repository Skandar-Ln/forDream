import React, { Component } from 'react';
import {Timeline, Icon, Tag} from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { calBMI } from '../util';

moment.locale('zh-cn');

const startDay = moment('2018-08-05', 'YYYY-MM-DD');
const startWeight = 91;
const pastDays = 5;
const futureDays = 15;
const daysPerPointKilo = 3;

function computeWeight(day) {
    const diff = day.diff(startDay, 'day');
    const shouldAddWeight =  Math.floor(diff / daysPerPointKilo);
    return startWeight + shouldAddWeight * 0.1;
}

function computeDate(weight) {
    const diff = weight - startWeight;
    const diffDay = Math.ceil(diff * 10 * daysPerPointKilo);
    return startDay.clone().add(diffDay, 'day');
}

function TargetItem({date}) {
    const weight = computeWeight(date);
    const bmi = calBMI(weight / 2);
    return (
        <div style={{overflow: 'hidden'}}>
            <span style={{float: 'left', marginLeft: 10}}>{date.format("MMM DD - YYYY")}</span>
            <Tag color="orange">
                {weight.toFixed(1)}斤
            </Tag>
            <Tag color={bmi >= 18.5 ? 'green' : 'blue'}>
                {bmi.toFixed(1)}
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
                <Timeline.Item dot={<Icon type="trophy" style={{ fontSize: '20px', color: "gold" }} />}>
                    <TargetItem date={computeDate(104.6)} />
                </Timeline.Item>
                <Timeline.Item dot={<Icon type="skin" style={{ fontSize: '20px', color: "green" }} />}>
                    <TargetItem date={moment('2019-07-08', 'YYYY-MM-DD')} />
                </Timeline.Item>
            </Timeline>
        );
    }
}

export default TargetLine;