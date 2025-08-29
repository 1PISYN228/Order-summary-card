import "./main.scss"
import { ReactComponent as IllustrationHero } from "@/assets/images/illustration-hero.svg"
import { ReactComponent as IconMusic } from "@/assets/images/icon-music.svg"
import Button from "@/components/Button"

export default () => {
    return (
        <main>
            <section className="mainSection">
                <IllustrationHero className="mainImage"/>
                <section className="secondSection">
                    <article className="firstArticle">
                        <h2 className="firstArticle__title">Order Summary</h2>
                        <p className="firstArticle__text">You can now listen to millions of songs,<br/>
                        audiobooks, and podcasts on any device<br/>
                        anywhere you like!</p>
                    </article>

                    <article className="secondArticle">
                        <div className="secondArticle__div">
                            <IconMusic />
                            <div className="secondArticle__div__nameMoney">
                                <span className="secondArticle__div__nameMoney__name">Annual Plan</span>
                                <span className="secondArticle__div__nameMoney__money">$59.99/year</span>
                            </div>
                        </div>
                        <a href="" className="secondArticle__link">Change</a>
                    </article>

                    <article className="thirdArticle">
                        <Button />
                        <button className="thirdArticle__button">
                            Cancel Order
                        </button>
                    </article>
                </section>
            </section>
        </main>
    )
}