import Places_logo from 'components/places_logo/places_logo'
import './Places_block.scss'
import ArticleList from 'components/ArticleList/ArticleList'

type Props = {
    addPlacesToCart: (countFinal: number, priceFinal: number) => void
}
const Places_block = ({ addPlacesToCart }: Props) => {
    return (
        <div className="Places_block">
            <div className="container">
                <Places_logo />
                <h6 className="little_title">Places</h6>
                <h2 className="title">
                    Lorem ipsum dolor sit amet tetur adipis icing elit
                </h2>

                <ArticleList addPlacesToCart={addPlacesToCart} />
            </div>
        </div>
    )
}
export default Places_block
