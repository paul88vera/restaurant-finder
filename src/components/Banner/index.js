export default function Banner(){
  return (
    <picture id='main-banner'>
        <source media="(min-width:728px)" srcset="https://unsplash.it/1920" />
        <img src="https://unsplash.it/500/350" width="100%" alt="" />
      </picture>
  )
}