import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { WebsiteData } from '../../app-settings/types/website-data';
import { SeoData } from '../../app-settings/types/seo-data'; 
@Injectable({
    providedIn: 'root'
})
export class SeoHelper {
     
    private _webTitle: string = "";
    private _baseUrl: string = "";
    private _image: string = "";
    constructor(private meta: Meta, private readonly title: Title) {
        // meta.addTag({ name: 'description', content: 'Title and Meta tags examples' });
        //meta.addTag({ name: 'viewport', content: 'width=device-width, initial-scale=1' });
        this.meta.updateTag({ charset: 'UTF-8' });
        this.meta.updateTag({ name: 'robots', content: 'INDEX, FOLLOW' });

        this.meta.updateTag({ httpEquiv: 'Content-Type', content: 'text/html' });
        this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
        this.meta.updateTag({ property: 'og:type', content: 'website' });
    }

    //addMetaTags() {
    //  this.meta.addTags([
    //    { name: 'robots', content: 'INDEX, FOLLOW' },
    //    { name: 'author', content: this.appSettings.websiteData.WebTitle },
    //    { name: 'keywords', content: 'Gaming, Betting, Sports' },
    //    { name: 'description', content: 'Gaming, Betting, Sports' }, 
    //    { name: 'date', content: '2018-06-02', scheme: 'YYYY-MM-DD' },
    //    { httpEquiv: 'Content-Type', content: 'text/html' },
    //    { property: 'og:title', content: this.appSettings.websiteData.WebTitle },
    //    { property: 'og:site_name', content: this.appSettings.websiteData.WebTitle },
    //    { property: 'og:description', content: 'Gaming, Betting, Sports' },
    //    { property: 'og:type', content: "website" },
    //    { charset: 'UTF-8' }
    //  ]);
    //}
    //getMetaTags() {
    //  let metaEl: HTMLMetaElement = this.meta.getTag('name= "keywords"');
    //  //console.log(metaEl);
    //  //console.log(metaEl.name);
    //  //console.log(metaEl.content);

    //  let els: HTMLMetaElement[] = this.meta.getTags('name');
    //  els.forEach(el => {
    //    //console.log(el);
    //    //console.log(el.name);
    //    //console.log(el.content);
    //  });
    //}

    initSEO(websiteData: WebsiteData) {
        this._webTitle = websiteData.WebTitle;
        this._baseUrl = websiteData.WebURL;
        this._image = websiteData.WebsiteLogo;
        this.title.setTitle(this._webTitle);
        this.meta.updateTag({ name: 'author', content: this._webTitle });
        this.meta.updateTag({ property: 'og:image', content: this._image });
        this.meta.updateTag({ property: 'og:site_name', content: this._webTitle });
        this.meta.updateTag({ name: 'twitter:site', content: this._webTitle });
        this.meta.updateTag({ name: 'twitter:image', content: this._image });
        this.meta.updateTag({ property: 'og:url', content: `${this._baseUrl}` });
        this.meta.updateTag({ property: 'og:image:alt', content: this._webTitle });
    }

    generateTags(config: SeoData) {
        // default values
        config = {
            pageTitle: 'Angular <3 Linkbots',
            description: 'My SEO friendly Angular Component',
            keywords: 'My SEO friendly Angular Component',
            slug: '',
            ...config
        }
        this.title.setTitle(this._webTitle + '|'+config.pageTitle); 
        this.meta.updateTag({ name: 'description', content: config.description });
        this.meta.updateTag({ name: 'keywords', content: config.keywords }); 
        this.meta.updateTag({ name: 'twitter:title', content: config.pageTitle });
        this.meta.updateTag({ name: 'twitter:description', content: config.description }); 
        this.meta.updateTag({ property: 'og:title', content: config.pageTitle });
        this.meta.updateTag({ property: 'og:description', content: config.description });  
        this.meta.updateTag({ property: 'og:url', content: `${this._baseUrl}/${config.slug}` });

    }

    //removeMetaTags() {
    //  //Using removeTag
    //  this.meta.removeTag('name = "description"');
    //  this.meta.removeTag('name= "keywords"');
    //  this.meta.removeTag('name = "viewport"');
    //  this.meta.removeTag('name = "robots"');

    //  //Using removeTagElement
    //  let author: HTMLMetaElement = this.meta.getTag('name = "author"');
    //  this.meta.removeTagElement(author);
    //  let date: HTMLMetaElement = this.meta.getTag('name = "date"');
    //  this.meta.removeTagElement(date);
    //  let contentType: HTMLMetaElement = this.meta.getTag('httpEquiv = "Content-Type"');
    //  this.meta.removeTagElement(contentType);
    //  let charset: HTMLMetaElement = this.meta.getTag('charset');
    //  this.meta.removeTagElement(charset);
    //  let ogTitle: HTMLMetaElement = this.meta.getTag('property = "og:title"');
    //  this.meta.removeTagElement(ogTitle);
    //  let ogType: HTMLMetaElement = this.meta.getTag('property = "og:type"');
    //  this.meta.removeTagElement(ogType);
    //}
} 
