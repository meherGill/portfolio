import React, { useEffect } from "react";
import "./FlipCard.css";
import TypeOfProjectsMapper, { TypeOfProjectsEnum } from "./TypeOfProjects";
export default ({
    passedId,
    children,
    typeOfProject,
}: {
    passedId: string;
    children: any;
    typeOfProject: TypeOfProjectsEnum;
}) => {
    const cardRefContent = React.useRef<any>(null);
    const cardRef = React.useRef<any>(null);
    const typeOfProjectJSX = TypeOfProjectsMapper[typeOfProject];
    const getCounterCardId = () => {
        const splitted_id = passedId.split("-");
        if (splitted_id.includes("copy")) {
            const index = splitted_id.indexOf("copy");
            splitted_id[index] = "main";
        } else {
            const index = splitted_id.indexOf("main");
            splitted_id[index] = "copy";
        }
        const idOfOtherCard = splitted_id.join("-");

        return document.getElementById(idOfOtherCard);
    };

    useEffect(() => {
        cardRef.current.addEventListener("touchStart", () => {
            console.log("touched");
            if (cardRef.current.classList.includes("rotate__card")) {
                removeRotateCardCallback();
            } else {
                addRotateCardCallback();
            }
        });
        cardRef.current.addEventListener("mouseenter", addRotateCardCallback);

        cardRef.current.addEventListener(
            "mouseleave",
            removeRotateCardCallback
        );
    }, []);
    const addRotateCardCallback = () => {
        const otherCardId = getCounterCardId()!;
        cardRefContent.current.classList.add("rotate__card");
        otherCardId.classList.add("rotate__card");
    };

    const removeRotateCardCallback = () => {
        const otherCardId = getCounterCardId()!;
        cardRefContent.current.classList.remove("rotate__card");
        otherCardId.classList.remove("rotate__card");
    };
    return (
        <div ref={cardRef} className="card">
            <div
                ref={cardRefContent}
                id={passedId}
                className="card__content rounded-md bg-slate-900"
            >
                <div className="front__card absolute top-0 bottom-0 left-0 right-0 flex flex-col items-stretch justify-center">
                    <div
                        className="rounded-md"
                        style={{
                            background: `url(${typeOfProjectJSX.imageUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            flex: "1",
                        }}
                    ></div>

                    {children}
                </div>

                <div className="card__back bg-slate-700 rounded-md">
                    {typeOfProjectJSX.jsx()}
                </div>
            </div>
        </div>
    );
};
