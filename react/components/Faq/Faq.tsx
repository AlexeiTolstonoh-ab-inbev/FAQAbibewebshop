import React from 'react'
import styles from './Faq.css'
interface FaqProps {}

const Faq: StorefrontFunctionComponent<FaqProps> = () => {
	return (
		<div>
			<div className={styles.faqWrapper}>

				<div className={styles.faqContainer}>
					<h3 className={styles.faqContainerHeader}>Order & Receive</h3>
					<input className={styles.hide} id="hd-1" type="checkbox"></input>
					<label className={styles.categoryHeader} htmlFor="hd-1">When do I receive my order?</label>
					<div>
						HTML — стандартный язык разметки документов во Всемирной паутине. Большинство веб-страниц
						содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами и
						отображается в виде документа в удобной для человека форме..
					</div>
					<br/>
					<br/>
					<input className={styles.hide} id="hd-2" type="checkbox"></input>
					<label className={styles.categoryHeader} htmlFor="hd-2">What should I do when the product is out of stock?</label>
					<div>
						CSS - CSS Cascading Style Sheets — каскадные таблицы стилей — формальный язык описания
						внешнего вида документа, написанного с использованием языка разметки. Преимущественно
						используется как средство описания, оформления внешнего вида веб-страниц, написанных с
						помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам,
						например, к SVG или XUL.
					</div>
				</div>

				<div className={styles.faqContainer}>
					<h3 className={styles.faqContainerHeader}>Return</h3>

					<input className={styles.hide} id="hd-3" type="checkbox"></input>
					<label className={styles.categoryHeader} htmlFor="hd-3">When do I receive my order?</label>
					<div>
						HTML — стандартный язык разметки документов во Всемирной паутине. Большинство веб-страниц
						содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами и
						отображается в виде документа в удобной для человека форме..
					</div>
					<br/>
					<br/>
					<input className={styles.hide} id="hd-4" type="checkbox"></input>
					<label className={styles.categoryHeader} htmlFor="hd-4">What should I do when the product is out of stock?</label>
					<div>
						CSS - CSS Cascading Style Sheets — каскадные таблицы стилей — формальный язык описания
						внешнего вида документа, написанного с использованием языка разметки. Преимущественно
						используется как средство описания, оформления внешнего вида веб-страниц, написанных с
						помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам,
						например, к SVG или XUL.
					</div>
				</div>

				<div className={styles.faqContainer}>
					<h3 className={styles.faqContainerHeader}>Payment Methods</h3>

					<input className={styles.hide} id="hd-5" type="checkbox"></input>
					<label className={styles.categoryHeader} htmlFor="hd-5">When do I receive my order?</label>
					<div>
						HTML — стандартный язык разметки документов во Всемирной паутине. Большинство веб-страниц
						содержат описание разметки на языке HTML (или XHTML). Язык HTML интерпретируется браузерами и
						отображается в виде документа в удобной для человека форме..
					</div>
					<br/>
					<br/>
					<input className={styles.hide} id="hd-6" type="checkbox"></input>
					<label className={styles.categoryHeader} htmlFor="hd-6">What should I do when the product is out of stock?</label>
					<div>
						CSS - CSS Cascading Style Sheets — каскадные таблицы стилей — формальный язык описания
						внешнего вида документа, написанного с использованием языка разметки. Преимущественно
						используется как средство описания, оформления внешнего вида веб-страниц, написанных с
						помощью языков разметки HTML и XHTML, но может также применяться к любым XML-документам,
						например, к SVG или XUL.
					</div>
				</div>

			</div>
		</div>
	)
}
Faq.schema = {
	title: 'editor.faq.title',
	description: 'editor.faq.description',
	type: 'object',
	properties: {},
}
export default Faq
