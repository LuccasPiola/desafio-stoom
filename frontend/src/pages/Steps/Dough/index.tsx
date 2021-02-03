import React from 'react'

import dough from '../../../assets/dough.png'

import * as S from '../styles'

export default function DoughStep(): JSX.Element {
  return (
    <S.Wrapper>
      <aside>
        <h1>A massa</h1>
        <img src={dough} alt="massa" width={450} height={450} />
      </aside>

      <div>
        <main>
          <h1>Escolha um tipo de massa</h1>

          <div>
            <S.Option onClick={() => 1} isSelected>
              Massa fina
            </S.Option>
            <S.Option onClick={() => 1}>Massa média</S.Option>
            <S.Option onClick={() => 1}>Massa grossa</S.Option>
          </div>
        </main>

        <article>
          <h2>
            &quot;A massa fina foi feita para quem gosta de delicadeza na pizza,
            para os amantes do recheio. Crocante e saborosa, a massa fina é a
            segunda mais pedida da casa.&quot; Chef Piola
          </h2>
          {/*
          <h2>
            &quot;A massa média são para os que gostam da pizza exatamente do
            jeito que ela foi criada. Na medida, essa é a massa mais pedida da
            casa.&quot; Chef Piola
          </h2>

          <h2>
            &quot;A massa grossa é exatamente o que um amante de massas precisa,
            com bastante recheio pra acompanhar. Um bom amante de pizza é um bom
            amante de massas!&quot; Chef Piola
          </h2> */}
        </article>

        <footer>
          <S.Next onClick={() => 1}>Próximo</S.Next>
        </footer>
      </div>
    </S.Wrapper>
  )
}
