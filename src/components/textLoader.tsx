import React, { useEffect, useState, useRef } from "react";
import { $isIntroDone } from "@stores/store";

export default ({ text, indexes, startNextAnimationAtIndex }: { text: string[]; indexes: number[], startNextAnimationAtIndex: number }) => {
    const indexRef = useRef(1);
    const [textToDisplay, setTextToDisplay] = useState(text[0]);
    const intervalRef = useRef<any>(null);
    const cursorRef = useRef<HTMLSpanElement>(null);
    if (startNextAnimationAtIndex > indexes.at(-1)!){
        startNextAnimationAtIndex = indexes.at(-1)!
    }

    const setIntervalAgain = () => {
        removeBlinkAnimation();
        intervalRef.current = setInterval(() => {
            setTextToDisplay((textToDisplay) => {
                let potentialNewLine = "";
                if (indexes.includes(indexRef.current)) {
                    potentialNewLine = "\n\n";
                }
                const newText = `${textToDisplay}${potentialNewLine}${
                    text[indexRef.current]
                }`;
                indexRef.current++;
                return newText;
            });
        }, 50);
    };

    const clearIntervalAgain = () => {
        if (cursorRef.current) clearInterval(intervalRef.current);
    };

    const setAnimationToBlink = () => {
        cursorRef.current?.classList.add("animate-cursorblink");
    };

    const removeBlinkAnimation = () => {
        cursorRef.current?.classList.remove("animate-cursorblink");
    };
    useEffect(() => {
        setIntervalAgain();
        return () => {
            if (!intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (textToDisplay.length === startNextAnimationAtIndex){
            $isIntroDone.set(true);
        }
        if (textToDisplay.length >= text.length + 2 * (indexes.length - 1)) {
            //completely stop animation
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            setAnimationToBlink();
        } else if (indexes.includes(indexRef.current)) {
            clearIntervalAgain();
            setAnimationToBlink();
            setTimeout(() => {
                setIntervalAgain();
            }, 200);
        }
    }, [textToDisplay]);

    return (
        <>
            <h2 className="font-['Press_Start_2P'] whitespace-pre-wrap">
                {textToDisplay}
                <span
                    ref={cursorRef}
                    className={`bg-base-content h-5 w-2 inline-block ml-2`}
                ></span>
            </h2>
        </>
    );
};
