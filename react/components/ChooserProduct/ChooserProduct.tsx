import React, {useState} from 'react'



const ChooserProduct = () => {
	// const [brandOpt, setBrandOpt] = useState('/jupiler')
	const [packType, setPackType] = useState('/pack-type/cans')
	const [departamentName, setDepartamentName] = useState('/beer')
	const [type, setType] = useState('/pils')


	const departaments = [
		{ value: '/beer', label: 'Beer' },
		{ value: '/other', label: 'Other drinks' },
		{ value: '/jupiler', label: 'Deals' },
		{ value: '/jupiler', label: 'Merch' },
	]
	// const brands = [
	// 	{ value: '/jupiler', label: 'Jupiler' },
	// 	{ value: '/stella-artois', label: 'Stella Artois'  },
	// 	{ value: '/leffe', label: 'Leffe' },
	// 	{ value: '/vtrimpel', label: 'Tripel Karmeliet' },
	// 	{ value: '/corona', label: 'Corona'},
	// 	{ value: '/victoria', label: 'Victoria' },
	// 	{ value: '/mike\'s', label: 'Mike'},
	// 	{ value: '/atom', label: 'ATOM Brands' }
	// ]
	const types = [
		{ value: '/pils', label: 'Pils',departament: '/beer'},
		{ value: '/abbey', label: 'Abbey', departament: '/beer'},
		{ value: '/Alcoholfree', label: 'Alcoholfree', departament: '/beer'},
		{ value: '/Strong-Blonde', label: 'Strong Blonde', departament: '/beer' },
		{ value: '/craft', label: 'Craft', departament: '/beer' },
		{ value: '/water', label: 'Water', departament: '/other'},
		{ value: '/water', label: 'Soft Drinks', departament: '/other'},
		{ value: '/water', label: 'Juices', departament: '/other'},
		{ value: '/water', label: 'Wine And More', departament: '/other'},
		{ value: '/water', label: 'Spirits', departament: '/other'},
		{ value: '/water', label: 'Seltzers', departament: '/other'}
	]
	const packTypes: any[] = [
		{ value: '/pack-type/cans', label: 'Cans',departament: '/beer'},
		{ value: '/pack-type/bottles', label: 'Bottles', departament: '/beer'},
		{ value: '/pack-type/perfect-draft', label: 'Perfect Draft', departament: '/beer'},
		{ value: '/gift', label: 'Gift Packs', departament: '/beer' }
	]
	const handleChangeType = (event: any) => {
		setType(event.target.value);
	};
	const handleChangePackType = (event: any) => {

		setPackType(event.target.value);
	};
	const handleChangeDepartament = (event: any) => {
		setDepartamentName(event.target.value)
	}
	const typeOfPack = packTypes.filter((el:any)=> el.departament === departamentName)
	const typeOfSelect = types.filter((el:any) => el.departament === departamentName)
debugger
	const linkString = `${departamentName}${packType}${type}`



	return (
		<div>

			<select onChange={handleChangeDepartament}>
				{departaments.map((el: any) => <option value={el.value} >{el.label}</option>)}
			</select>
			{typeOfPack.length>0 ? <select onChange={handleChangePackType}>
				{typeOfPack.map((el: any) => <option value={el.value} >{el.label}</option>)}
			</select> : null}
			<select onChange={handleChangeType}>
				{typeOfSelect.map((el: any) => <option value={el.value} >{el.label}</option>)}
			</select>

			<a href={linkString}>Click me</a>
		</div>
	)
}

export default ChooserProduct
//`/beer/bottles/jupiler/pack-type?fuzzy=0&initialMap=c,c,c&initialQuery=beer/pack-type/bottles&map=category-1,category-3,brand,category-2&operator=and`
//`/beer/bottles/pack-type/stella-artois?fuzzy=0&initialMap=c,c,c&initialQuery=beer/pack-type/bottles&map=category-1,category-3,category-2,brand&operator=and`
//`/beer/bottles/pack-type/victoria?fuzzy=0&initialMap=c,c,c&initialQuery=beer/pack-type/bottles&map=category-1,category-3,category-2,brand&operator=and`
