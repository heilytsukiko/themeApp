import {type ReactElement} from "react";
import {Alert} from "@mui/material";
import SpriteIcon from "@components/SpriteIcon";
import "./style.css";

export type TNotificationTypes = "warning" | "info";

type label = string;
type list = (string | number)[];

//тип для определения маркированности, нумерованности или отсутсвия маркеров
type listTypes = "none" | "mark" | "number"

export interface IFlexibleAlertProps {
    content: list | label;
    listMark?: listTypes;
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
    content,
    listMark = "none",
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
    const isArray = Array.isArray(content);

    console.log("content: " + content)
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
                {!isArray && content}

                {isArray && (listMark != 'mark' || 'none') && (listMark === 'number') &&
                    <ol className="list">
                        {content.map ((item) => 
                            <li key={item}> {item} </li>
                        )}
                    </ol>
                }
                
                {isArray && (listMark === 'mark' || 'none' ) && (listMark != 'number') &&
                    <ul className={`list ${listMark === 'none'?  'mark-none' : ''}`}>
                        {content.map ((item) => 
                            <li key={item}> {item} </li>
                        )}
                    </ul>
                }
            </Alert>
        </div>
    );
};

export default DSNotification;

/* Что нужно сделать:
0. label | list
1. позиционирование SVG картинки: flex-start, center, flex-end
2. border
3. SVG size
4. Paddings
5. Font-size
6. Расстояние между текстом и картинкой(27, 10, 24 пикселя)
7. Ширина карточек
*/