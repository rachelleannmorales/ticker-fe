import { TextField, StockChart } from "../../common";
import React, {FC, useState, useEffect, Fragment} from "react";
import useWebSocket from "./hooks/useWebSocket";
import { StyledContainer, GridContainer, GridColumn } from "./Dashboard.styles";
import { Descriptions } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import requireAuth from "../../requireAuth";
import { IStockItem } from "./Dashboard.types";

const Dashboard: FC<any> = () => {
    const [numberInput, setNumberInput] = useState(null as any);
    const wsData = useWebSocket();
    const [stockData, setStockData] = useState<IStockItem[]>([]);
    const [lastData, setLastData] = useState<IStockItem|null>(null);

    useEffect(() => {
        if (!wsData) return;
        setStockData((prevState: any[]) => [...prevState, {
            x: new Date(wsData.timestamp).getTime(),
            y: parseFloat(wsData.price),
            customData: wsData
        }])
        setLastData(wsData);
    }, [wsData])

    const handleMouseOver = (e:any) => {
        setLastData(e.target.customData)
    }
    
    return (
        <Fragment>
            <StyledContainer>
                <TextField id="numberInput" type="number" placeholder="Enter number to compare" value={numberInput} onChange={(e: any) => setNumberInput(parseInt(e.target.value))}/>
            </StyledContainer>
            <StyledContainer>
                <GridContainer>
                    {lastData && <GridColumn>
                        <p style={{fontSize: '42px'}}>{lastData.price?.toLocaleString()}</p>
                        {numberInput && (
                            (lastData?.price > numberInput) ?
                            <CaretUpOutlined  style={{fontSize: '42px'}} /> :
                            <CaretDownOutlined  style={{fontSize: '42px'}} />)
                        }
                    </GridColumn>}
                    <GridColumn>
                    {lastData && <Descriptions title="" column={2} bordered={true} size="small">
                        { (Object.keys(lastData)).map((key) => 
                            (key !== 'timestamp' && key !== 'price') ?
                                <Descriptions.Item label={key.toUpperCase()}>{lastData[key]}</Descriptions.Item> :
                                ''
                            )
                        }
                    </Descriptions>}
                    </GridColumn>
                </GridContainer>
                <StockChart name={''} data={stockData} handleMouseOver={handleMouseOver} />
            </StyledContainer>
        </Fragment>
    )
}

export default requireAuth(Dashboard);