import './Places_Page.scss'
import ArticleList from 'components/ArticleList/ArticleList'

type Props = {}
const Places_Page = (props: Props) => {
    return (
        <div className="Places_Page">
            <div className="introduc_block">
                <h2>places</h2>
            </div>

            <div className="places_page_cards">
                <div className="container">
                    <ArticleList
                        addPlacesToCart={function (
                            countFinal: number,
                            priceFinal: number
                        ): void {
                            throw new Error('Function not implemented.')
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
export default Places_Page
