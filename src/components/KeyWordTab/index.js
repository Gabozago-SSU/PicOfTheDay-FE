import React from "react";
import * as S from "./styles";
import KeywordChip from "../commons/Chip/KeywordChip";

const KeyWordTab = ({ keywords }) => {
    return (
        <div>
            <S.KeywordLayout>
                <S.KeyWordTabBanner>
                    <div>
                        <p>키워드
                        </p>
                    </div>
                </S.KeyWordTabBanner>
            </S.KeywordLayout>
            <S.KeywordScrollLayout>
                <S.KeyWordWrapper>
                    {keywords
                        ? keywords.map((keyword, index) => {
                              return <KeywordChip key={index + keyword}>{keyword}</KeywordChip>;
                          })
                        : null}
                </S.KeyWordWrapper>
            </S.KeywordScrollLayout>
        </div>
    );
};

export default KeyWordTab;
