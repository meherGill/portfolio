import React from "react";

export enum TypeOfProjectsEnum {
    ANARCHY_CHESS = "anarchyChess",
    FOUR_IN_A_ROW = "fourInARow",
}

const getAnarchyChessJSX = () => (
    <div className="content__description  px-5 [&>p]:mt-3">
        <p className="text-center">
            Its a chess game based on custom rules from r/anarchyChess.
            <br />
            Due to cutom rules it had to be built from scratch without using
            libraries like chess.js
        </p>
        <p>
            {" "}
            <a
                className="text-orange-500 border-b-2 border-orange-500 pb-1"
                href="https://anarchy-chess.netlify.app/"
            >
                Try it here
            </a>
        </p>
        <p>
            <a
                className="text-amber-500 border-b-2 border-amber-500 pb-1"
                href="https://github.com/meherGill/AnarchyChess"
            >
                {" "}
                Click here to peek at the code
            </a>
        </p>
    </div>
);

const getFourInARowJSX = () => (
    <div className="content__description px-5">
        <p>
            A connect-4 game that was built overnight in 6 hours, it hasnt been
            updated since because its a memento to the first app that I ever
            hosted.
        </p>
        <p>
            <a
                className="text-orange-500 border-b-2 border-orange-500 pb-1"
                href="https://mehergill.github.io/"
            >
                Try it here
            </a>
        </p>
        <p>
            <a
                className="text-amber-500 border-b-2 border-amber-500 pb-1"
                href="https://github.com/meherGill/connect-four"
            >
                {" "}
                Click here to peek at the code
            </a>
        </p>
    </div>
);

// const values : { [key in ]}
type ITypeOfProjectsMapper = {
    [key in TypeOfProjectsEnum]: {
        jsx: () => JSX.Element;
        imageUrl: string;
    };
};

const TypeOfProjectsMapper: ITypeOfProjectsMapper = {
    anarchyChess: {
        jsx: getAnarchyChessJSX,
        imageUrl: "/projects/anarchy_chess.png",
    },
    fourInARow: {
        jsx: getFourInARowJSX,
        imageUrl: "/projects/four_in_a_row.png",
    },
};

export default TypeOfProjectsMapper;
