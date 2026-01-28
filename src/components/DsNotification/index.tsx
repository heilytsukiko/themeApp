import {type ReactElement} from "react";
import {Alert} from "@mui/material";
import SpriteIcon from "@components/SpriteIcon";
import "./style.css";

export type TNotificationTypes = "warning" | "info";

//тип для определения маркированности, нумерованности или отсутсвия маркеров
type listType = "none" | "mark" | "number"

// если поле list передано, то listMark обязателен
type listProp = {list: undefined; listType: undefined} | {list: (string | number)[]; listMark: listType}

export interface IFlexibleAlertProps {
    label?: string;
    list?: listProp;
    type?: TNotificationTypes;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
    iconName?: string;
    iconSize?: string;
    iconColor?: string;
    fullWidth?: boolean;
}

export enum NotificationBackgroundColors {
    beige = "#FEFCF3",
    lightSand = "#EBCD91",
}

export enum NotificationTypes {
    warning = "warning",
    info = "info",
}

const DEFAULT_ICON_SIZE: string = "19px";

const DSNotification = ({
    label="",
    list,
    type=NotificationTypes.warning,
    backgroundColor=NotificationBackgroundColors.beige,
    textColor="black",
    borderColor=NotificationBackgroundColors.lightSand,
    iconName="warningIcon",
    iconSize=DEFAULT_ICON_SIZE,
    iconColor="#BD7D22",
    fullWidth=false,
}: IFlexibleAlertProps): ReactElement => {
    const dsBorderColor = borderColor ? borderColor : backgroundColor;
    const isList = list?.list; //хранит именно сам массив

    return (
        <div
            className="ds-notification"
            style={{
                width: fullWidth ? "100%" : "auto",
                border: `1px solid ${dsBorderColor}`,
            }}
        >
            <Alert
                className={`ds-mui-alert ds-alert-${type}`}
                sx={{
                    backgroundColor: backgroundColor,
                    color: textColor,
                    width: fullWidth ? "100%" : "auto",
            }}
                icon={<SpriteIcon iconId={iconName} size={iconSize} color={iconColor}/>}
            >
                {list && 
                    <ul>
                        {isList.map ((item) => 
                            <li key={item}>{item}</li>
                        )}
                    </ul>}
            </Alert>
        </div>
    );
};

export default DSNotification;
