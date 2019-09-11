import Link from 'next/link'

const search = () => {
  return (
    <div>
      <input type="text" name="name" id="name" />
      <Link href={`/index?name=ironman`}>
        <button>Submit</button>
      </Link>
    </div>
  )
}

export default search
