
const Card = ({title,age}) => {
  return (
    <>
     <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src="https://media.istockphoto.com/id/1499809788/photo/owl-sit-on-a-old-tree-branch.jpg?s=2048x2048&w=is&k=20&c=vRMJ6b-kkib4LLJRaiejQRkDtXEyn2DehkEo7GRBHBU="
          alt
          width={484}
          height={612}
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
                {title}
            </p>
          </blockquote>
          <figcaption>
            <div>{age}</div>
            <div>Staff Engineer, Algolia</div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}

export default Card
