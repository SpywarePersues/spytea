import Head from 'next/head'
import Image from 'next/image'
import ContainerBlock from '../components/ContainerBlock'
import ExploreSlider from '../components/ExploreSlider'
import ExtrasSlider from '../components/ExtrasSlider'
import Header from '../components/Header'

export default function Home() {
  return (
    <ContainerBlock>
      <Header />
      <ExploreSlider />
      <ExtrasSlider />
    </ContainerBlock>
  )
}
