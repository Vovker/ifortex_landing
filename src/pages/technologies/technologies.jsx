import {
  SlideWrapper,
  TechnologiesArticleTitle,
  TechnologiesArticleWrapper, TechnologiesList,
  TechnologiesTitle,
  TechnologiesWrapper, TechnologyIcon, TechnologyTitle, TechnologyWrapper
} from "./styled";
import js_logo from '../../assets/technologies/js.png';
import react_logo from '../../assets/technologies/react-js-icon.png';
import angular_logo from '../../assets/technologies/angular.png';
import vue_logo from '../../assets/technologies/vue.png';
import css_logo from '../../assets/technologies/css.png';
import html_logo from '../../assets/technologies/html.png';
import mysql_logo from '../../assets/technologies/mysql.png';
import mssql_logo from '../../assets/technologies/mssql.svg';
import postgresql from '../../assets/technologies/postgresql.png';
import mongodb_logo from '../../assets/technologies/mongodb.png';
import figma_logo from '../../assets/technologies/figma.svg';
import photoshop_logo from '../../assets/technologies/photoshop.png';
import axure_logo from '../../assets/technologies/axure.svg';
import php_logo from '../../assets/technologies/php.png';
import python_logo from '../../assets/technologies/python.png';
import nodejs_logo from '../../assets/technologies/node.png';
import java_logo from '../../assets/technologies/java.png';
import symfony_logo from '../../assets/technologies/symfony.png';
import django_logo from '../../assets/technologies/django.svg';
import csharp_logo from '../../assets/technologies/csharp.png';
import dotnet_logo from '../../assets/technologies/dotnet.png';
import golang_logo from '../../assets/technologies/golang.png';
import dynamodb_logo from '../../assets/technologies/aws-dynamodb.svg';
import kotlin_logo from '../../assets/technologies/kotlin-1.svg';
import reactNative_logo from '../../assets/technologies/react_native.svg';
import swift_logo from '../../assets/technologies/swift-15.svg';
import xamarin_logo from '../../assets/technologies/xamarin.svg';
import flutter_logo from '../../assets/technologies/flutter.svg';
import aws_logo from '../../assets/technologies/aws-2.svg';
import azure_logo from '../../assets/technologies/azure-1.svg';
import google_logo from '../../assets/technologies/google-cloud.svg';
import heroku_logo from '../../assets/technologies/heroku.svg';
import digitalOcean_logo from '../../assets/technologies/digitalocean.svg';
import {useEffect} from "react";
import {ContentWrapper} from "../main/styled";

export const Technologies = () => {

  useEffect(() => {
    document.title = "iFortex - Technologies";
  }, []);

  return (
    <SlideWrapper>
      <ContentWrapper>
        <TechnologiesTitle>Technologies</TechnologiesTitle>
        <TechnologiesWrapper>
          <Article title={'Frontend'} technologies={[
            {title: 'JavaScript', icon: js_logo},
            {title: 'React', icon: react_logo},
            {title: 'Angular', icon: angular_logo},
            {title: 'Vue', icon: vue_logo},
            {title: 'CSS', icon: css_logo},
            {title: 'HTML', icon: html_logo},
          ]}/>
          <Article title={'Databases'} technologies={[
            {title: 'MySQL', icon: mysql_logo},
            {title: 'MS SQL', icon: mssql_logo},
            {title: 'PostgreSQL', icon: postgresql},
            {title: 'MongoDB', icon: mongodb_logo},
            {title: 'DynamoDB', icon: dynamodb_logo},
          ]}/>
          <Article title={'UI/UX tools'} technologies={[
            {title: 'Figma', icon: figma_logo},
            {title: 'Photoshop', icon: photoshop_logo},
            {title: 'Axure', icon: axure_logo},
          ]}/>
          <Article title={'Backend'} technologies={[
            {title: 'PHP', icon: php_logo},
            {title: 'Python', icon: python_logo},
            {title: 'NodeJS', icon: nodejs_logo},
            {title: 'Java', icon: java_logo},
            {title: 'Symfony', icon: symfony_logo},
            {title: 'Django', icon: django_logo},
            {title: 'C#', icon: csharp_logo},
            {title: '.NET', icon: dotnet_logo},
            {title: 'Go', icon: golang_logo},
          ]}/>
          <Article title={'Mobile'} technologies={[
            {title: 'Kotlin', icon: kotlin_logo},
            {title: 'React Native', icon: reactNative_logo},
            {title: 'Swift', icon: swift_logo},
            {title: 'Xamarin', icon: xamarin_logo},
            {title: 'Flutter', icon: flutter_logo},
          ]}/>
          <Article title={'Services'} technologies={[
            {title: 'AWS', icon: aws_logo},
            {title: 'Azure', icon: azure_logo},
            {title: 'Google Cloud', icon: google_logo},
            {title: 'Heroku', icon: heroku_logo},
            {title: 'Digital Ocean', icon: digitalOcean_logo}
          ]}/>
        </TechnologiesWrapper>
      </ContentWrapper>
    </SlideWrapper>
  );
}

const Article = ({title, technologies}) => {
  return (
    <TechnologiesArticleWrapper>
      <TechnologiesArticleTitle>{title}</TechnologiesArticleTitle>
      <TechnologiesList>
        {
          technologies.map((technology, index) => {
            return (
              <TechnologyWrapper key={index}>
                <TechnologyIcon src={technology.icon} alt={technology.title}/>
                <TechnologyTitle>{technology.title}</TechnologyTitle>
              </TechnologyWrapper>
            )
          })
        }
      </TechnologiesList>
    </TechnologiesArticleWrapper>
  );
}
