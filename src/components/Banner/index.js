export default function Banner(){
  return (
    <picture id='main-banner'>
        <source media="(min-width:728px)" srcset="https://unsplash.it/1250/500" />
        <img src="https://unsplash.it/700/400" width="100%" alt="" />
      </picture>
  )
}